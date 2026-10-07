import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { site } from "../data/site";

export default function Page({ title, description, children }) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </motion.div>
  );
}