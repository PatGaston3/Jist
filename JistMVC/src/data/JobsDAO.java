package data;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
//import entities.Job;
//import.entities.User;

@Transactional
public class JobsDAO {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
//	public List<User> indexUsers() {
//		String query = "Select u from User u";
//		return em.createQuery(query, User.class).getResultList();
//	}
//	
//	public List<Job> indexJobs() {
//		String query = "Select j from Job j";
//		return em.createQuery(query, Job.class).getResulList();
//	}
//		
//	public User showUser(int id) {
//		return em.find(User.class, id);
//	} 
//	
//	public Collection<Job> showJob(int id) {
//		User user = null;
//		try{
//			user = em.find(User.class, id);
//		}catch(Exception e) {
//			e.printStackTrace();
//		}
//		if(user != null) {
//			return user.getJob();
//		}
//		return null;
//	}
//	
//	public void createJob(int id, Job job) {
//		User user = em.find(User.class, id);
//		job.setUser(user);
//		em.persist(job);
//		em.flush();
//	}
//	public User create (User user) {
//		String rawPassword = user.getPassword();
//		String encodedPassword = passwordEncoder.encode(rawPassword);
//		user.getPassword(encodedPassword);
//		em.persist(user);
//		em.flush();
//		return user;	
//	}
//	public User authenticateUser (User loginData) throws Exception {
//		User user = em.createQuery("select u from User u where u.username = :username", User.class)
//					.setParameter("username", loginData.getUsername())
//					.getSingleResult();
//		if(passwordEncoder.matches(loginData.getPassword(), user.getPassword())) {
//			return null;
//		}
//		return null;
//	}
//	
//	public User update(int id, User user) {
//		User updatedUser = em.find(User.class, id);
//		updatedUser.setUsername(user.getUsername());
//		updatedUser.setPassword(user.getPassword());
//		updatedUser.setEmail(user.getEmail());
//		updatedUser.setJobs(User.getJobs());
//		em.merge(updatedUser);
//		return updatedUser;
//	}
//	
//	public Job update(int id, Job job) {
//		User managedUser = em.find(User.class, id);
//		job.setUser(managedUser);
//		Job managedJob = em.find(Job.class, id);
//		managedJob.set
//		
//		return managedJob;
//	}
//	
//	public void destroyUser(int id) {
//		User user = em.find(User.class, id);
//		em.remove(user);
//	}
//	public void destroyJob(int id, int tId) {
//		String query = "Delete from Job where id =:tId";
//		em.createQuery(query).setParameter("tId", tId).executeUpdate();
//	}
}