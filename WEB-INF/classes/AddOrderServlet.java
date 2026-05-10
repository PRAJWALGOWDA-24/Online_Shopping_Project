import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class AddOrderServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("Servlet called!");

        String name = request.getParameter("name");
        int price = Integer.parseInt(request.getParameter("price"));

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/shopping",
                "root",
                "Prajwal24."
            );

            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO orders(item_name, price) VALUES (?, ?)"
            );

            ps.setString(1, name);
            ps.setInt(2, price);

            ps.executeUpdate();

            response.getWriter().println("Saved");

        } catch(Exception e){
            e.printStackTrace();
        }
    }
}