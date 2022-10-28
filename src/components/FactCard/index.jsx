import React from "react";
import { FactContainer } from "./Styles";
import loader from "../../assets/svgs/loader.svg";
import { BiError } from "react-icons/bi";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const FactCard = () => {
  console.log("card re render");
  const factState = useSelector(state => state.factState);
  return (
    <FactContainer>
      <AnimatePresence exitBeforeEnter>
        {factState.isLoading ? (
          <motion.img
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={loader}
            alt="loader animation"
          />
        ) : (
          <motion.h2
            key={1}
            initial={{ opacity: 0, x: "400px" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-400px", maxHeight: "200px", overflow: "hidden" }}
            transition={{
              duration: 0.2,
            }}
          >
            {factState.fact || <BiError size={120} color="#ec5b2e" />}
          </motion.h2>
        )}
      </AnimatePresence>
    </FactContainer>
  );
};

export default FactCard;
