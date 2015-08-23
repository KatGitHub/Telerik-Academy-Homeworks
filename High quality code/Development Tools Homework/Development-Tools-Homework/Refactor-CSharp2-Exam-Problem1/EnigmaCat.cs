namespace Refactor_CSharp2_Exam_Solutions
{
    using System;
    using System.Linq;
    using System.Text;

    public class EnigmaCat
    {
        private const int BaseNumeralSystem = 17;
        private const int RequiredNumeralSystem = 26;

        public static void Main()
        {
            string[] input = Console.ReadLine().Split(' ');
            StringBuilder result = new StringBuilder();

            for (int wordIndex = input.Length - 1; wordIndex >= 0; wordIndex--)
            {
                long transferredTo10th = GetWordNumberIn10thNumeralSystem(input[wordIndex]);
                string decodedWord = DecodeNumberToWord(transferredTo10th);
                result.Append(decodedWord);
                result.Append(' ');
            }

            var reversedResult = result.ToString().Trim().Reverse().ToArray();
            Console.WriteLine(reversedResult);
        }

        public static long GetWordNumberIn10thNumeralSystem(string word)
        {
            long result = 0;
            long power = word.Length - 1;

            for (int letterIndex = 0; letterIndex < word.Length; letterIndex++)
            {
                result += (word[letterIndex] - 'a') * MultiplyNumber(BaseNumeralSystem, power);
                power--;
            }

            return result;
        }

        public static string DecodeNumberToWord(long number)
        {
            StringBuilder result = new StringBuilder();
            char decodedLetter;

            if (number < RequiredNumeralSystem)
            {
                decodedLetter = (char)(number + 'a');
                result.Append(decodedLetter);
            }
            else
            {
                while (number > 0)
                {
                    decodedLetter = (char)((number % RequiredNumeralSystem) + 'a');
                    number /= RequiredNumeralSystem;
                    result.Append(decodedLetter);
                }
            }            

            return result.ToString();
        }

        public static long MultiplyNumber(long number, long power)
        {
            long result = 1;
            for (int i = 0; i < power; i++)
            {
                result *= number;
            }

            return result;
        }
    }
}
