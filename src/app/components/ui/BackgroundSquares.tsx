import * as React from "react"
import { motion } from "framer-motion"

function SvgComponent(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    // Aguarda o componente montar e um pequeno delay para garantir que tudo foi carregado
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Não renderiza nada até estar completamente montado
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1437}
        height={1036}
        viewBox="0 0 1437 1036"
        fill="none"
        {...props}
      >
      <g clipPath="url(#clip0_5_31)">
        <mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={-1}
          y={0}
          width={1440}
          height={1440}
        >
          <path
            transform="translate(-1)"
            fill="url(#paint0_radial_5_31)"
            d="M0 0H1440V1197H0z"
          />
        </mask>
        <g clipPath="url(#clip1_5_31)" mask="url(#a)">
          <mask id="b" fill="#fff">
            <path d="M-49 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M47 96v1h1v-1h-1zM46 0v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#b)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          />
          <mask id="c" fill="#fff">
            <path d="M47 0h96v96H47V0z" />
          </mask>
          <motion.path
            d="M143 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#c)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <mask id="d" fill="#fff">
            <path d="M143 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M239 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#d)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <mask id="e" fill="#fff">
            <path d="M239 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M335 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#e)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          <mask id="f" fill="#fff">
            <path d="M335 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M431 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#f)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <mask id="g" fill="#fff">
            <path d="M431 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M527 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#g)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          />
          <mask id="h" fill="#fff">
            <path d="M527 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M623 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#h)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          <mask id="i" fill="#fff">
            <path d="M623 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M719 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#i)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.5
            }}
          />
          <mask id="j" fill="#fff">
            <path d="M719 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M815 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#j)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          <mask id="k" fill="#fff">
            <path d="M815 0h96v96h-96V0z" />
          </mask>
          <path
            d="M911 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#k)"
          />
          <mask id="l" fill="#fff">
            <path d="M911 0h96v96h-96V0z" />
          </mask>
          <path
            d="M1007 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#l)"
          />
          <mask id="m" fill="#fff">
            <path d="M1007 0h96v96h-96V0z" />
          </mask>
          <path
            d="M1103 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#m)"
          />
          <mask id="n" fill="#fff">
            <path d="M1103 0h96v96h-96V0z" />
          </mask>
          <motion.path
            d="M1199 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#n)"
            animate={{
              fillOpacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4.5
            }}
          />
          <mask id="o" fill="#fff">
            <path d="M1199 0h96v96h-96V0z" />
          </mask>
          <path
            d="M1295 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#o)"
          />
          <mask id="p" fill="#fff">
            <path d="M1295 0h96v96h-96V0z" />
          </mask>
          <path
            d="M1391 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#p)"
          />
          <mask id="q" fill="#fff">
            <path d="M1391 0h96v96h-96V0z" />
          </mask>
          <path
            d="M1487 96v1h1v-1h-1zm-1-96v96h2V0h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.03}
            mask="url(#q)"
          />
          <mask id="r" fill="#fff">
            <path d="M-49 96h96v96h-96V96z" />
          </mask>
          <motion.path
            d="M47 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#r)"
            animate={{
              fillOpacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          />
          <mask id="s" fill="#fff">
            <path d="M47 96h96v96H47V96z" />
          </mask>
          <path
            d="M143 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#s)"
          />
          <mask id="t" fill="#fff">
            <path d="M143 96h96v96h-96V96z" />
          </mask>
          <motion.path
            d="M239 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#t)"
            animate={{
              fillOpacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.8
            }}
          />
          <mask id="u" fill="#fff">
            <path d="M239 96h96v96h-96V96z" />
          </mask>
          <motion.path d="M239 96h96v96h-96V96z" fill="#A7E97F" fillOpacity={0.4} animate={{ fillOpacity: [0.01, 0.04, 0.01] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }} />
          <path
            d="M335 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#u)"
          />
          <mask id="v" fill="#fff">
            <path d="M335 96h96v96h-96V96z" />
          </mask>
          <path
            d="M431 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#v)"
          />
          <mask id="w" fill="#fff">
            <path d="M431 96h96v96h-96V96z" />
          </mask>
          <path
            d="M527 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#w)"
          />
          <mask id="x" fill="#fff">
            <path d="M527 96h96v96h-96V96z" />
          </mask>
          <path
            d="M623 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#x)"
          />
          <mask id="y" fill="#fff">
            <path d="M623 96h96v96h-96V96z" />
          </mask>
          <path
            d="M719 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#y)"
          />
          <mask id="z" fill="#fff">
            <path d="M719 96h96v96h-96V96z" />
          </mask>
          <motion.path
            d="M815 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#z)"
            animate={{
              fillOpacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.7
            }}
          />
          <mask id="A" fill="#fff">
            <path d="M815 96h96v96h-96V96z" />
          </mask>
          <path
            d="M911 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#A)"
          />
          <mask id="B" fill="#fff">
            <path d="M911 96h96v96h-96V96z" />
          </mask>
          <path
            d="M1007 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#B)"
          />
          <mask id="C" fill="#fff">
            <path d="M1007 96h96v96h-96V96z" />
          </mask>
          <path
            d="M1103 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#C)"
          />
          <mask id="D" fill="#fff">
            <path d="M1103 96h96v96h-96V96z" />
          </mask>
          <motion.path d="M1103 96h96v96h-96V96z" fill="#A7E97F" fillOpacity={0.4} animate={{ fillOpacity: [0.01, 0.04, 0.01] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 1.5 }} />
          <motion.path
            d="M1199 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#D)"
            animate={{
              fillOpacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5.2
            }}
          />
          <mask id="E" fill="#fff">
            <path d="M1199 96h96v96h-96V96z" />
          </mask>
          <path
            d="M1295 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#E)"
          />
          <mask id="F" fill="#fff">
            <path d="M1295 96h96v96h-96V96z" />
          </mask>
          <path
            d="M1391 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#F)"
          />
          <mask id="G" fill="#fff">
            <path d="M1391 96h96v96h-96V96z" />
          </mask>
          <path
            d="M1487 192v1h1v-1h-1zm-1-96v96h2V96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.05}
            mask="url(#G)"
          />
          <mask id="H" fill="#fff">
            <path d="M-49 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#H)"
          />
          <mask id="I" fill="#fff">
            <path d="M47 192h96v96H47v-96z" />
          </mask>
          <path
            d="M143 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#I)"
          />
          <mask id="J" fill="#fff">
            <path d="M143 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#J)"
          />
          <mask id="K" fill="#fff">
            <path d="M239 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M335 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#K)"
          />
          <mask id="L" fill="#fff">
            <path d="M335 192h96v96h-96v-96z" />
          </mask>
          <motion.path
            d="M431 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#L)"
            animate={{
              fillOpacity: [0.08, 0.15, 0.08]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4.8
            }}
          />
          <mask id="M" fill="#fff">
            <path d="M431 192h96v96h-96v-96z" />
          </mask>
          <motion.path d="M431 192h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.2} animate={{ fillOpacity: [0.01, 0.02, 0.01] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }} />
          <path
            d="M527 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#M)"
          />
          <mask id="N" fill="#fff">
            <path d="M527 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M623 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#N)"
          />
          <mask id="O" fill="#fff">
            <path d="M623 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#O)"
          />
          <mask id="P" fill="#fff">
            <path d="M719 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#P)"
          />
          <mask id="Q" fill="#fff">
            <path d="M815 192h96v96h-96v-96z" />
          </mask>
          <motion.path d="M815 192h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.01} 
            animate={{
              fillOpacity: [0.001, 0.01, 0.001]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5
            }}
          />
          <path
            d="M911 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#Q)"
          />
          <mask id="R" fill="#fff">
            <path d="M911 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#R)"
          />
          <mask id="S" fill="#fff">
            <path d="M1007 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#S)"
          />
          <mask id="T" fill="#fff">
            <path d="M1103 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M1199 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#T)"
          />
          <mask id="U" fill="#fff">
            <path d="M1199 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#U)"
          />
          <mask id="V" fill="#fff">
            <path d="M1295 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#V)"
          />
          <mask id="W" fill="#fff">
            <path d="M1391 192h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 288v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.08}
            mask="url(#W)"
          />
          <mask id="X" fill="#fff">
            <path d="M-49 288h96v96h-96v-96z" />
          </mask>
          <path d="M-49 288h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.07} />
          <path
            d="M47 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#X)"
          />
          <mask id="Y" fill="#fff">
            <path d="M47 288h96v96H47v-96z" />
          </mask>
          <path
            d="M143 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#Y)"
          />
          <mask id="Z" fill="#fff">
            <path d="M143 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#Z)"
          />
          <mask id="aa" fill="#fff">
            <path d="M239 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M335 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aa)"
          />
          <mask id="ab" fill="#fff">
            <path d="M335 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M431 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ab)"
          />
          <mask id="ac" fill="#fff">
            <path d="M431 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ac)"
          />
          <mask id="ad" fill="#fff">
            <path d="M527 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M623 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ad)"
          />
          <mask id="ae" fill="#fff">
            <path d="M623 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ae)"
          />
          <mask id="af" fill="#fff">
            <path d="M719 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#af)"
          />
          <mask id="ag" fill="#fff">
            <path d="M815 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M911 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ag)"
          />
          <mask id="ah" fill="#fff">
            <path d="M911 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ah)"
          />
          <mask id="ai" fill="#fff">
            <path d="M1007 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ai)"
          />
          <mask id="aj" fill="#fff">
            <path d="M1103 288h96v96h-96v-96z" />
          </mask>
          <motion.path d="M1103 288h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.7} animate={{ fillOpacity: [0.01, 0.07, 0.01] }} transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }} />
          <path
            d="M1199 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aj)"
          />
          <mask id="ak" fill="#fff">
            <path d="M1199 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ak)"
          />
          <mask id="al" fill="#fff">
            <path d="M1295 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#al)"
          />
          <mask id="am" fill="#fff">
            <path d="M1391 288h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 384v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#am)"
          />
          <mask id="an" fill="#fff">
            <path d="M-49 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#an)"
          />
          <mask id="ao" fill="#fff">
            <path d="M47 384h96v96H47v-96z" />
          </mask>
          <path
            d="M143 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ao)"
          />
          <mask id="ap" fill="#fff">
            <path d="M143 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ap)"
          />
          <mask id="aq" fill="#fff">
            <path d="M239 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M335 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aq)"
          />
          <mask id="ar" fill="#fff">
            <path d="M335 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M431 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ar)"
          />
          <mask id="as" fill="#fff">
            <path d="M431 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#as)"
          />
          <mask id="at" fill="#fff">
            <path d="M527 384h96v96h-96v-96z" />
          </mask>
          <motion.path d="M527 384h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.7} animate={{ fillOpacity: [0.01, 0.07, 0.01] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }} />
          <path
            d="M623 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#at)"
          />
          <mask id="au" fill="#fff">
            <path d="M623 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#au)"
          />
          <mask id="av" fill="#fff">
            <path d="M719 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#av)"
          />
          <mask id="aw" fill="#fff">
            <path d="M815 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M911 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aw)"
          />
          <mask id="ax" fill="#fff">
            <path d="M911 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ax)"
          />
          <mask id="ay" fill="#fff">
            <path d="M1007 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ay)"
          />
          <mask id="az" fill="#fff">
            <path d="M1103 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M1199 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#az)"
          />
          <mask id="aA" fill="#fff">
            <path d="M1199 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aA)"
          />
          <mask id="aB" fill="#fff">
            <path d="M1295 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aB)"
          />
          <mask id="aC" fill="#fff">
            <path d="M1391 384h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 480v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aC)"
          />
          <mask id="aD" fill="#fff">
            <path d="M-49 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aD)"
          />
          <mask id="aE" fill="#fff">
            <path d="M47 480h96v96H47v-96z" />
          </mask>
          <path
            d="M143 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aE)"
          />
          <mask id="aF" fill="#fff">
            <path d="M143 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aF)"
          />
          <mask id="aG" fill="#fff">
            <path d="M239 480h96v96h-96v-96z" />
          </mask>
          <motion.path d="M815 192h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.3} animate={{ fillOpacity: [0.01, 0.03, 0.01] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 3 }} />
          <path
            d="M335 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aG)"
          />
          <mask id="aH" fill="#fff">
            <path d="M335 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M431 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aH)"
          />
          <mask id="aI" fill="#fff">
            <path d="M431 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aI)"
          />
          <mask id="aJ" fill="#fff">
            <path d="M527 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M623 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aJ)"
          />
          <mask id="aK" fill="#fff">
            <path d="M623 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aK)"
          />
          <mask id="aL" fill="#fff">
            <path d="M719 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aL)"
          />
          <mask id="aM" fill="#fff">
            <path d="M815 480h96v96h-96v-96z" />
          </mask>
          <motion.path d="M815 480h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.7} animate={{ fillOpacity: [0.01, 0.07, 0.01] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }} />
          <path
            d="M911 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aM)"
          />
          <mask id="aN" fill="#fff">
            <path d="M911 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aN)"
          />
          <mask id="aO" fill="#fff">
            <path d="M1007 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aO)"
          />
          <mask id="aP" fill="#fff">
            <path d="M1103 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M1199 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aP)"
          />
          <mask id="aQ" fill="#fff">
            <path d="M1199 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aQ)"
          />
          <mask id="aR" fill="#fff">
            <path d="M1295 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aR)"
          />
          <mask id="aS" fill="#fff">
            <path d="M1391 480h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 576v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aS)"
          />
          <mask id="aT" fill="#fff">
            <path d="M-49 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aT)"
          />
          <mask id="aU" fill="#fff">
            <path d="M47 576h96v96H47v-96z" />
          </mask>
          <path d="M47 576h96v96H47v-96z" fill="#A7E97F" fillOpacity={0.07} />
          <path
            d="M143 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aU)"
          />
          <mask id="aV" fill="#fff">
            <path d="M143 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aV)"
          />
          <mask id="aW" fill="#fff">
            <path d="M239 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M335 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aW)"
          />
          <mask id="aX" fill="#fff">
            <path d="M335 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M431 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aX)"
          />
          <mask id="aY" fill="#fff">
            <path d="M431 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aY)"
          />
          <mask id="aZ" fill="#fff">
            <path d="M527 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M623 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#aZ)"
          />
          <mask id="ba" fill="#fff">
            <path d="M623 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ba)"
          />
          <mask id="bb" fill="#fff">
            <path d="M719 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bb)"
          />
          <mask id="bc" fill="#fff">
            <path d="M815 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M911 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bc)"
          />
          <mask id="bd" fill="#fff">
            <path d="M911 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bd)"
          />
          <mask id="be" fill="#fff">
            <path d="M1007 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#be)"
          />
          <mask id="bf" fill="#fff">
            <path d="M1103 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M1199 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bf)"
          />
          <mask id="bg" fill="#fff">
            <path d="M1199 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bg)"
          />
          <mask id="bh" fill="#fff">
            <path d="M1295 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 576h96v96h-96v-96z"
            fill="#A7E97F"
            fillOpacity={0.07}
          />
          <path
            d="M1391 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bh)"
          />
          <mask id="bi" fill="#fff">
            <path d="M1391 576h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 672v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bi)"
          />
          <mask id="bj" fill="#fff">
            <path d="M-49 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bj)"
          />
          <mask id="bk" fill="#fff">
            <path d="M47 672h96v96H47v-96z" />
          </mask>
          <path
            d="M143 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bk)"
          />
          <mask id="bl" fill="#fff">
            <path d="M143 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bl)"
          />
          <mask id="bm" fill="#fff">
            <path d="M239 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M335 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bm)"
          />
          <mask id="bn" fill="#fff">
            <path d="M335 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M431 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bn)"
          />
          <mask id="bo" fill="#fff">
            <path d="M431 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bo)"
          />
          <mask id="bp" fill="#fff">
            <path d="M527 672h96v96h-96v-96z" />
          </mask>
          <motion.path d="M527 672h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.7} animate={{ fillOpacity: [0.01, 0.07, 0.01] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }} />
          <path
            d="M623 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bp)"
          />
          <mask id="bq" fill="#fff">
            <path d="M623 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bq)"
          />
          <mask id="br" fill="#fff">
            <path d="M719 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#br)"
          />
          <mask id="bs" fill="#fff">
            <path d="M815 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M911 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bs)"
          />
          <mask id="bt" fill="#fff">
            <path d="M911 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bt)"
          />
          <mask id="bu" fill="#fff">
            <path d="M1007 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bu)"
          />
          <mask id="bv" fill="#fff">
            <path d="M1103 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 672h96v96h-96v-96z"
            fill="#A7E97F"
            fillOpacity={0.07}
          />
          <path
            d="M1199 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bv)"
          />
          <mask id="bw" fill="#fff">
            <path d="M1199 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bw)"
          />
          <mask id="bx" fill="#fff">
            <path d="M1295 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bx)"
          />
          <mask id="by" fill="#fff">
            <path d="M1391 672h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 768v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#by)"
          />
          <mask id="bz" fill="#fff">
            <path d="M-49 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bz)"
          />
          <mask id="bA" fill="#fff">
            <path d="M47 768h96v96H47v-96z" />
          </mask>
          <path
            d="M143 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bA)"
          />
          <mask id="bB" fill="#fff">
            <path d="M143 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bB)"
          />
          <mask id="bC" fill="#fff">
            <path d="M239 768h96v96h-96v-96z" />
          </mask>

<motion.path d="M239 768h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.7} animate={{ fillOpacity: [0.01, 0.07, 0.01] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 1.5 }} />

          <path
            d="M335 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bC)"
          />
          <mask id="bD" fill="#fff">
            <path d="M335 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M431 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bD)"
          />
          <mask id="bE" fill="#fff">
            <path d="M431 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bE)"
          />
          <mask id="bF" fill="#fff">
            <path d="M527 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M623 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bF)"
          />
          <mask id="bG" fill="#fff">
            <path d="M623 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bG)"
          />
          <mask id="bH" fill="#fff">
            <path d="M719 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bH)"
          />
          <mask id="bI" fill="#fff">
            <path d="M815 768h96v96h-96v-96z" />
          </mask>
          <motion.path d="M815 768h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.7} animate={{ fillOpacity: [0.01, 0.07, 0.01] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }} />
          <path
            d="M911 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bI)"
          />
          <mask id="bJ" fill="#fff">
            <path d="M911 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bJ)"
          />
          <mask id="bK" fill="#fff">
            <path d="M1007 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bK)"
          />
          <mask id="bL" fill="#fff">
            <path d="M1103 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M1199 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bL)"
          />
          <mask id="bM" fill="#fff">
            <path d="M1199 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bM)"
          />
          <mask id="bN" fill="#fff">
            <path d="M1295 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bN)"
          />
          <mask id="bO" fill="#fff">
            <path d="M1391 768h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 864v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bO)"
          />
          <mask id="bP" fill="#fff">
            <path d="M-49 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bP)"
          />
          <mask id="bQ" fill="#fff">
            <path d="M47 864h96v96H47v-96z" />
          </mask>
          <path
            d="M143 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bQ)"
          />
          <mask id="bR" fill="#fff">
            <path d="M143 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bR)"
          />
          <mask id="bS" fill="#fff">
            <path d="M239 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M335 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bS)"
          />
          <mask id="bT" fill="#fff">
            <path d="M335 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M431 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bT)"
          />
          <mask id="bU" fill="#fff">
            <path d="M431 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bU)"
          />
          <mask id="bV" fill="#fff">
            <path d="M527 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M623 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bV)"
          />
          <mask id="bW" fill="#fff">
            <path d="M623 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bW)"
          />
          <mask id="bX" fill="#fff">
            <path d="M719 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M815 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bX)"
          />
          <mask id="bY" fill="#fff">
            <path d="M815 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M911 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bY)"
          />
          <mask id="bZ" fill="#fff">
            <path d="M911 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#bZ)"
          />
          <mask id="ca" fill="#fff">
            <path d="M1007 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ca)"
          />
          <mask id="cb" fill="#fff">
            <path d="M1103 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M1199 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cb)"
          />
          <mask id="cc" fill="#fff">
            <path d="M1199 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cc)"
          />
          <mask id="cd" fill="#fff">
            <path d="M1295 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cd)"
          />
          <mask id="ce" fill="#fff">
            <path d="M1391 864h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 864h96v96h-96v-96z"
            fill="#A7E97F"
            fillOpacity={0.07}
          />
          <path
            d="M1487 960v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ce)"
          />
          <mask id="cf" fill="#fff">
            <path d="M-49 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M47 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cf)"
          />
          <mask id="cg" fill="#fff">
            <path d="M47 960h96v96H47v-96z" />
          </mask>
          <path
            d="M143 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95H47v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cg)"
          />
          <mask id="ch" fill="#fff">
            <path d="M143 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M239 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ch)"
          />
          <mask id="ci" fill="#fff">
            <path d="M239 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M335 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ci)"
          />
          <mask id="cj" fill="#fff">
            <path d="M335 960h96v96h-96v-96z" />
          </mask>
          <path d="M335 960h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.07} />
          <path
            d="M431 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cj)"
          />
          <mask id="ck" fill="#fff">
            <path d="M431 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M527 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ck)"
          />
          <mask id="cl" fill="#fff">
            <path d="M527 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M623 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cl)"
          />
          <mask id="cm" fill="#fff">
            <path d="M623 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M719 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cm)"
          />
          <mask id="cn" fill="#fff">
            <path d="M719 960h96v96h-96v-96z" />
          </mask>
          <path d="M719 960h96v96h-96v-96z" fill="#A7E97F" fillOpacity={0.07} />
          <path
            d="M815 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cn)"
          />
          <mask id="co" fill="#fff">
            <path d="M815 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M911 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#co)"
          />
          <mask id="cp" fill="#fff">
            <path d="M911 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M1007 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cp)"
          />
          <mask id="cq" fill="#fff">
            <path d="M1007 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M1103 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cq)"
          />
          <mask id="cr" fill="#fff">
            <path d="M1103 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M1199 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cr)"
          />
          <mask id="cs" fill="#fff">
            <path d="M1199 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M1295 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cs)"
          />
          <mask id="ct" fill="#fff">
            <path d="M1295 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M1391 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#ct)"
          />
          <mask id="cu" fill="#fff">
            <path d="M1391 960h96v96h-96v-96z" />
          </mask>
          <path
            d="M1487 1056v1h1v-1h-1zm-1-96v96h2v-96h-2zm1 95h-96v2h96v-2z"
            fill="#D0D5DD"
            fillOpacity={0.16}
            mask="url(#cu)"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_5_31"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 1197 -751.588 0 720 0)"
        >
          <stop />
          <stop offset={0.953125} stopOpacity={0} />
        </radialGradient>
        <clipPath id="clip0_5_31">
          <path fill="#fff" d="M0 0H1437V1036H0z" />
        </clipPath>
        <clipPath id="clip1_5_31">
          <path fill="#fff" transform="translate(-241)" d="M0 0H1920V1440H0z" />
        </clipPath>
      </defs>
      </svg>
    </motion.div>
  )
}

export default SvgComponent