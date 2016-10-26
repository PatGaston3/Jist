package data;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import entities.Job;
import entities.User;


@Transactional
public class JobsDAO {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
	public List<User> indexUsers() {
		String query = "Select u from User u";
		return em.createQuery(query, User.class).getResultList();
	}
	
	public List<Job> indexJobs() {
		String query = "Select j from Job j";
		return em.createQuery(query, Job.class).getResultList();
	}
		
	public User showUser(int id) {
		return em.find(User.class, id);
	} 
	
	public Job showJob(int id) {		
		Job job = em.find(Job.class, id);
		
		return job;
		
	} 
	
	public Collection<Job> showJobs(int id) {
		User user = null;
		try{
			user = em.find(User.class, id);
		}catch(Exception e) {
			e.printStackTrace();
		}
		if(user != null) {
			return user.getJobs();
		}
		return null;
	}
	
	public void createJob(int id, Job job) {
		User user = em.find(User.class, id);
		job.setUser(user);
		em.persist(job);
		em.flush();
	}
	public User create (User user) {
		String rawPassword = user.getPassword();
		String encodedPassword = passwordEncoder.encode(rawPassword);
		user.setPassword(encodedPassword);
		em.persist(user);
		em.flush();
		return user;	
	}
	public User authenticateUser (User loginData) throws Exception {
		User user = em.createQuery("select u from User u where u.username = :username", User.class)
					.setParameter("username", loginData.getUsername())
					.getSingleResult();
		if(passwordEncoder.matches(loginData.getPassword(), user.getPassword())) {
			return null;
		}
		return null;
	}
	
	public User update(int id, User user) {
		User updatedUser = em.find(User.class, id);
		updatedUser.setUsername(user.getUsername());
		updatedUser.setPassword(user.getPassword());
		updatedUser.setEmail(user.getEmail());
		updatedUser.setFname(user.getFname());
		updatedUser.setLname(user.getLname());
		updatedUser.setLocation(user.getLocation());
		updatedUser.setJobs(user.getJobs());
	
		em.merge(updatedUser);
		return updatedUser;
	}
	
	public Job update(int id, Job job) {
		User managedUser = em.find(User.class, id);
		job.setUser(managedUser);
		Job managedJob = em.find(Job.class, id);
		managedJob.setAppDate(job.getAppDate());
		managedJob.setCity(job.getCity());
		managedJob.setCompanyName(job.getCompanyName());
		managedJob.setContactEmail(job.getContactEmail());
		managedJob.setContactFname(job.getContactFname());
		managedJob.setContactLname(job.getContactLname());
		managedJob.setContactPhone(job.getContactPhone());
		managedJob.setDesiredSalary(job.getDesiredSalary());
		managedJob.setOfferedSalary(job.getOfferedSalary());
		managedJob.setJobTitle(job.getJobTitle());
		managedJob.setNotes(job.getNotes());
		managedJob.setOffer(job.getOffer());
		managedJob.setPostingUrl(job.getPostingUrl());
		managedJob.setState(job.getState());
		managedJob.setSalType(job.getSalType());
		managedJob.setStartDate(job.getStartDate());
		
		return managedJob;
	}
	
	public void destroyUser(int id) {
		User user = em.find(User.class, id);
		em.remove(user);
	}
	public void destroyJob(int id, int jId) {
		String query = "Delete from Job where id =:jId";
		em.createQuery(query).setParameter("jId", jId).executeUpdate();
	}
}