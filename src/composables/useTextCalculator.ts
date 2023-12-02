export const useTextCalculator = () => {
  const isValidResult = (text: string) => typeof +text === 'number' && !Number.isNaN(+text);
  /** 문자열이 수학식 계산하는 텍스트인지 판별한다. */
  const isCalculating = (text: string) => {
    const isFirstCharNumber = !Number.isNaN(+text[0]);
    const isOnlyNumber = /^[0-9 ]+$/.test(text);
    const isOnlyNumberAndOperator = isOnlyNumber === false && /^[0-9+%/*() -]+$/.test(text);
    return isFirstCharNumber && isOnlyNumberAndOperator;
  };

  /** 문자열이 수학식 계산중일 경우 반환값 던짐 */
  const calculate = (text: string) => {
    if (!isCalculating(text)) {
      return null;
    }
    try {
      // eslint-disable-next-line no-eval
      const result = String(eval(text));
      return isValidResult(String(result)) ? result : null;
    } catch {
      return null;
    }
  };
  return {
    calculate,
  };
};
