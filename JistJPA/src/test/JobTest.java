package test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Job;

public class JobTest {
	   private EntityManagerFactory emf;
	   private EntityManager em;

	@Before
	public void setUp() throws Exception {
	        emf = Persistence.
	            createEntityManagerFactory("JistJPA");
	        em = emf.createEntityManager();
	}

	@Test
	public void test() throws Exception {
		Job job = em.find(Job.class, 1);
		assertEquals("Seattle", job.getCity());
		assertEquals("Vice President", job.getJobTitle());
		assertEquals(1, job.getId());

	}

	@After
	public void tearDown() {
		   em.close();
	        emf.close();	}

}
