import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PaymentService {

    private final RestTemplate restTemplate;

    public PaymentService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
    public String processPayment(String paymentId) {
        return restTemplate.getForObject("http://slow-third-party-api/pay/" + paymentId, String.class);
    }

    public String paymentFallback(String paymentId, Throwable throwable) {
        return "Fallback response: Payment system is currently unavailable for ID " + paymentId;
    }
}