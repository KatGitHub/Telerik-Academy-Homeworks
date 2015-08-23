namespace log4net
{
    using log4net.Config;
    using System;

    public static class Log4Net
    {
        private static readonly ILog Log = LogManager.GetLogger(typeof(Log4Net));

        public static void Main()
        {
            XmlConfigurator.Configure();
            Log.Info("Info logging");
            try
            {
                throw new Exception("Exception!");
            }
            catch (Exception e)
            {
                Log.Error("This is my error", e);
            }

            Console.WriteLine("[any key to exit]");
            Console.ReadKey();
        }
    }
}
