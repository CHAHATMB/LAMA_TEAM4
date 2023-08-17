//package com.wellsfargo.sam2.config;
//
//import javax.servlet.Filter;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.stereotype.Service;
//
//import com.wellsfargo.sam2.repository.UserRepository;
//import com.wellsfargo.sam2.services.CustomUserDetailsService;
//
//
//@SuppressWarnings("deprecation")
//@Configuration
//@EnableWebSecurity
//public class MySecurityConfig extends WebSecurityConfigurerAdapter {
//	
//	private CustomUserDetailsService userDetailsService;
//	
//	@Autowired
//	private CustomJwtAuthenticationFilter customJwtAuthenticationFilter;
//	
//	
//	@Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService);
//    }
//
//	
//	 @Override
//	    protected void configure(HttpSecurity http) throws Exception {
////	        http
////	            .authorizeRequests()
////	                .antMatchers("/api/users/register").permitAll() // Public resources
////	                .antMatchers("/api/login").permitAll() // Login page
////	                .anyRequest().authenticated()
////	                .and()
////	            .formLogin()
////	                .loginPage("/login")
////	                .defaultSuccessUrl("/dashboard") // Redirect after successful login
////	                .and()
////	            .logout()
////	                .logoutSuccessUrl("/login")
////	                .and()
////	                .cors().disable()
////	            .csrf().disable()
//////	            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); // Disable CSRF protection for simplicity
////	        
//////	        http
////	        .addFilterBefore(customJwtAuthenticationFilter, 
////	        		(Class<? extends Filter>) UsernamePasswordAuthenticationFilter.class);
//	 
//	 
//		 http.csrf().disable()
//			.authorizeRequests().antMatchers("/helloadmin").hasRole("ADMIN")
//			.antMatchers("/hellouser").hasAnyRole("USER","ADMIN")
//			.antMatchers("/authenticate").permitAll().anyRequest().authenticated()
////			.and().exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
//			.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//			.and().addFilterBefore(customJwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//		
//	 }
//	 
//	 @Bean
//		@Override
//		public AuthenticationManager authenticationManagerBean() throws Exception {
//			return super.authenticationManagerBean();
//		}
//	 
//	@Bean
//	public PasswordEncoder passwordEncoder()
//	{
//	    return new BCryptPasswordEncoder();
//	}
//}
