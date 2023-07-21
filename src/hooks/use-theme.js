import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useTheme = () => {
  const [defaultTheme, setDefaultTheme] = useState("light");
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    !isLightTheme ? setDefaultTheme("dark") : setDefaultTheme("light");
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, [dispatch, isLightTheme, defaultTheme]);

  return { defaultTheme, setDefaultTheme };
};

export default useTheme;
