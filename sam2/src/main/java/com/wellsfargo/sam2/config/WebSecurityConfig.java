package com.wellsfargo.sam2.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.wellsfargo.sam2.services.CustomUserDetailsService;



@Configuration
@EnableMethodSecurity
// (securedEnabled = true,
// jsr250Enabled = true,
// prePostEnabled = true) // by default
public class WebSecurityConfig { // extends WebSecurityConfigurerAdapter {
  @Autowired
  CustomUserDetailsService userDetailsService;

  @Autowired
  private AuthEntryPointJwt unauthorizedHandler;

  @Bean
  public CustomJwtAuthenticationFilter authenticationJwtTokenFilter() {
    return new CustomJwtAuthenticationFilter();
  }

//  @Override
//  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//    authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//  }
  
  @Bean
  public DaoAuthenticationProvider authenticationProvider() {
      DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
       
      authProvider.setUserDetailsService(userDetailsService);
      authProvider.setPasswordEncoder(passwordEncoder());
   
      return authProvider;
  }

//  @Bean
//  @Override
//  public AuthenticationManager authenticationManagerBean() throws Exception {
//    return super.authenticationManagerBean();
//  }
  
  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
    return authConfig.getAuthenticationManager();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

//  @Override
//  protected void configure(HttpSecurity http) throws Exception {
//    http.cors().and().csrf().disable()
//      .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
//      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
//      .authorizeRequests().antMatchers("/api/auth/**").permitAll()
//      .antMatchers("/api/test/**").permitAll()
//      .anyRequest().authenticated();
//
//    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//  }
  
//  @Override
//  public void addCorsMappings(CorsRegistry registry) {
//      registry.addMapping("/**").allowedOrigins("*").allowedHeaders("*");
//  }
  
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable())
//    	.cors().and()
        .exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler))
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeRequests()
        .antMatchers("/**").permitAll();
//        .antMatchers("/api/auth/**").permitAll()
//		.antMatchers("/swagger-ui/**").permitAll()
//        .antMatchers("/api/employeeissue/**","/api/employeecard/**").hasRole("ADMIN")
//        .antMatchers("/api/employee/add/","/api/employee/edit/","/api/employee/delete/","/api/employee/all/").hasRole("ADMIN")
//        .antMatchers("/api/loancard/add","/api/loancard/edit/","/api/loancard/delete/","/api/loancard/all").hasRole("ADMIN")
//        .antMatchers("/api/item/add/","/api/item/edit/","/api/item/delete/","/api/item/all/").hasRole("ADMIN")
//        .antMatchers("/api/user/**").hasRole("USER")
//		.antMatchers("/api/loancard/myloans/{id}","/api/loancard/itemtype/{itemtype}",
//				"/api/loancard/applyloans", "/api/item/myitem/{id}","/api/employee/").hasAnyRole("USER","ADMIN")
//		
//		.anyRequest().authenticated();	

    
    
        
//        .authorizeHttpRequests(auth -> 
//          auth.requestMatchers("/api/auth/**").permitAll()
//              .requestMatchers("/api/test/**").permitAll()
//              .anyRequest().authenticated()
//        );
    
    http.authenticationProvider(authenticationProvider());

    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    
    return http.build();
  }
}