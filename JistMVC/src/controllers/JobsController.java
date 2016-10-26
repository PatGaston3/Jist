package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.JobsDAO;

@RestController
public class JobsController {

	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private JobsDAO jobsDAO;
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	
//	@RequestMapping(path = "user", method = RequestMethod.GET)
//	public List<User> indexUsers() {
//		
//	}
}
