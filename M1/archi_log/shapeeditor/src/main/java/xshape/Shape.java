package xshape;

import java.awt.geom.Point2D;

public interface Shape {
	void draw();
	Point2D scale();
	Shape scale(Point2D vec);
	
	Point2D position();
	Shape position(Point2D position);
	Shape translate(Point2D vec);
	Shape rotate(double rad);
	double rotation();
}
