import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Learning Guru` ;
  }, [title]);
};

export default useTitle;
