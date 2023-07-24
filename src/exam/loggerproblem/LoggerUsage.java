package exam.loggerproblem;

public class LoggerUsage {
    public static void main(String[] args) {
        ILogger logger=new LoggerImpl();
        ILoggerWithDateTimeImpl iLoggerWithDateTime = new ILoggerWithDateTimeImpl();
        logger.info("successful");
        logger.error("something went wrong");
        iLoggerWithDateTime.info("successful");
        iLoggerWithDateTime.error("something went wrong");
    }
}
