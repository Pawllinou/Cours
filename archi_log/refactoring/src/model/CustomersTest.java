package model;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class CustomersTest {
	Customer dummy;
	
	public CustomersTest() throws Exception {
		this.dummy = new Customer ("dummy");
		System.out.println("test Customers class with a test named dummy");
	}

	@Test
	public void testGetName() {
		System.out.println("test Customers method getName()...");
		if (dummy.getName().equals("dummy")) {
			System.out.println("test succeeded");
		}
	}

	@Test
	public void testStatement() {
		fail("Not yet implemented");
	}

}
