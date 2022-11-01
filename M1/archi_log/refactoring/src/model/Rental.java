package model;

public class Rental {
    private Movie _movie;
    private int _daysRented;
    private Pricings price;
    
    
    public Rental(Movie movie, int daysRented)
    {
	_movie=movie;
	_daysRented=daysRented;
	price = movie.getPriceCode().clone();
    }
    
    public int getDaysRented()
    {
	return _daysRented; 
    }
    
    public Movie getMovie()
    {
	return _movie;
    }
    
    public double getTotalAmount() {
    	return price.getPrice(_daysRented);
    }
}
