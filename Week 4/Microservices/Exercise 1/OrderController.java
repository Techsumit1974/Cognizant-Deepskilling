import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private UserClient userClient;

    @GetMapping("/user/{userId}")
    public String getOrderForUser(@PathVariable Long userId) {
        User user = userClient.getUserById(userId);
        return "Order details for " + user.getName();
    }
}