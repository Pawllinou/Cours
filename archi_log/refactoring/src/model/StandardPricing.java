package model;

public class StandardPricing implements Pricings{
	private double forfaitPrice;
	private int nbForfaitDays;
	private double extraPrice;
	
	public StandardPricing(double forfaitPrice, int nbForfaitDays, double extraPrice) {
		super();
		this.forfaitPrice = forfaitPrice;
		this.nbForfaitDays = nbForfaitDays;
		this.extraPrice = extraPrice;
	}

	public double getPrice(int nbRentalDays) {
		double price = nbRentalDays > nbForfaitDays ? (forfaitPrice + (nbRentalDays-nbForfaitDays) * extraPrice) : forfaitPrice;
		return price;
	}

	public double getForfaitPrice(int nbRentalDays) {
		return forfaitPrice;
	}
	
	public int getFrequentPoints(int nbRentalDays) {
		return 1;
	}
	
	public StandardPricing clone() {
		StandardPricing sp = null;
		try {
			sp = (StandardPricing) super.clone();
		}catch (Exception e) {
			//TODO
		}
		return sp;
	}
}
