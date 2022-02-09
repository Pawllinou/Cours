package model;

public class NewReleasePricing extends StandardPricing{

	public NewReleasePricing(double forfaitPrice, int nbForfaitDays, double extraPrice) {
		super(forfaitPrice, nbForfaitDays, extraPrice);
	}

	@Override
	public double getPrice(int nbRentalDays) {
		// TODO Auto-generated method stub
		return super.getPrice(nbRentalDays);
	}

	@Override
	public double getForfaitPrice(int nbRentalDays) {
		// TODO Auto-generated method stub
		return super.getForfaitPrice(nbRentalDays);
	}

	@Override
	public int getFrequentPoints(int nbRentalDays) {
		return nbRentalDays>1 ? 2 : 1;
	}

	@Override
	public StandardPricing clone() {
		return super.clone();
	}

	
}
