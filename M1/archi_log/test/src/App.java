import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class App extends Application{
    public static void main(String[] args) throws Exception {
        launch(args);
    }

    @Override
    public void start(Stage stage) throws Exception {
        Group root = new Group();
        Scene scene = new Scene(root, 600, 600);
        Button btn = new Button();
        btn.setScaleX(300);
        btn.setScaleY(300);
        btn.setText("Click me!");
        root.getChildren().add(btn);
        stage.setScene(scene);
        stage.show();   
    }
}
