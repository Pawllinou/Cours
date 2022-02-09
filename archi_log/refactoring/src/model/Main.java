package model;

public class Main {

	public static void main(String[] args) {
		Customer paul = new Customer ("Paul");
		System.out.println(paul.statement());
		Movie rrrRRR = new Movie ("RRRrrr!!!", 0);
		Movie Dune = new Movie ("Dune", 1);
		Movie Nemo = new Movie ("Nemo", 2);
		Rental rental_rrrRRR = new Rental (rrrRRR, 10);
		Rental rental_Dune = new Rental (Dune, 5);
		Rental rental_Nemo = new Rental (Nemo, 15);
		paul.addRental(rental_rrrRRR);
		paul.addRental(rental_Dune);
		paul.addRental(rental_Nemo);
		System.out.println(paul.statement());
	}
}
