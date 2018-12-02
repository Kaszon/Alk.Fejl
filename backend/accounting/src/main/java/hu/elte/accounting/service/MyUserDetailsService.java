package hu.elte.accounting.service;

import hu.elte.accounting.entities.Actor;
import hu.elte.accounting.repositories.ActorRepository;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private ActorRepository actorRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Actor> oActor = actorRepository.findByEmail(email);
        if (!oActor.isPresent()) {
            throw new UsernameNotFoundException(email);
        }
        Actor actor = oActor.get();
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(actor.getRole().toString()));

        return new org.springframework.security.core.userdetails.User(actor.getEmail(), actor.getPassword(),
                grantedAuthorities);
    }
}