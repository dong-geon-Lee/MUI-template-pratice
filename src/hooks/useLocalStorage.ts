import React, { useEffect, useState } from 'react';

export default function useLocalStorage<ValueType>(key: string, defaultValue: ValueType) {
  const [value, setValue] = useState(() => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (typeof window !== 'undefined' && e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: ValueType) => {
    setValue((currentValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}

// ? ValueType 이란건 뭘까?
// ? e.newValue가 뭐지??? window addEventListener너 중에서 storage 이벤트는 처음 본다.
// * 이벤트가 해결되는 기준은 로컬스토리지가 변경되었을 떄 해당 함수 내부의 로직이 변경되는것을 의미한다.
// todo e.newValue는 built in 속성인데 더 이상 지원하지 않는 레거시 인스턴스 속성이다! 크롬은 아직까지 지원
