package exam.loggerproblem;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ILoggerWithDateTimeImpl implements ILoggerWithDateTime{
    public ILoggerWithDateTimeImpl() {
        ILogger logger;
        logger = new LoggerImpl();
    }

    public String timeAndDate(){
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        return dateFormat.format(date)+" : ";
    }
    @Override
    public void info(String msg) {
        System.out.print(timeAndDate());
        logger.info(msg);

    }
    @Override
    public void error(String msg) {
        System.out.print(timeAndDate());
        logger.error(msg);
    }
}
