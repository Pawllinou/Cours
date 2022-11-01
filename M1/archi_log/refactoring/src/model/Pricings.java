package model;

public interface Pricings extends Cloneable{
	public double getPrice(int nbRentalDays);
	public double getForfaitPrice(int nbRentalDays);
	public Pricings clone();
}
