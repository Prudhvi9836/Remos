package exam.loggerproblem;

public interface ILoggerWithDateTime {
    ILogger logger = new LoggerImpl();
    void info(String msg);
    void error(String msg);
}
