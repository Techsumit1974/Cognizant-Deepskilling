import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("customer_service", r -> r.path("/api/customers/**")
                .filters(f -> f.rewritePath("/api/customers/(?<segment>.*)", "/${segment}")
                               .requestRateLimiter(c -> c.setRateLimiter(redisRateLimiter())))
                .uri("lb://customer-service"))
            .route("billing_service", r -> r.path("/api/billing/**")
                .filters(f -> f.rewritePath("/api/billing/(?<segment>.*)", "/${segment}"))
                .uri("lb://billing-service"))
            .build();
    }

    @Bean
    public RedisRateLimiter redisRateLimiter() {
        return new RedisRateLimiter(10, 20);
    }
}