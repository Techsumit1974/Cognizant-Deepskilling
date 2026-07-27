import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppenderLoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(AppenderLoggingExample.class);

    public static void main(String[] args) {
        logger.debug("Application is starting...");
        logger.info("Processing user request.");
        logger.warn("Memory usage is getting high.");
        logger.error("Failed to connect to the database.");
    }
}