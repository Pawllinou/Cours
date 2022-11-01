package model;

public class Movie {
    public static final Pricings CHILDREN = new StandardPricing(1.5, 3, 1.5);
    public static final Pricings REGULAR = new StandardPricing(2, 2, 1.5);
    public static final Pricings NEW_RELEASE = new StandardPricing(0, 0, 3);

    private String _title;
    private Pricings _priceCode;
  
    public Movie(String title,Pricings priceCode)
    {
	_title=title;
	_priceCode=priceCode;
    }
    public Pricings getPriceCode()
    {
	return _priceCode;
    }
    public void setPriceCode(Pricings priceCode)
    {
	_priceCode=priceCode;
    }
    public String getTitle()
    {
	return _title;
    }

}
