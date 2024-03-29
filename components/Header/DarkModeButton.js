import { FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import ThemeContext from "theme/context";
import useHasMounted from "hooks/useHasMounted";

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;
  return (
    <button className="text-default-fg dark:text-default-fg-d" onClick={toggleColorMode}>
      {colorMode === "light"
        ? <FiSun size={ICON_SIZE} />
        : <FiMoon size={ICON_SIZE} />
      }
    </button>
  )
}

const ICON_SIZE = 25;

export default DarkModeButton;
