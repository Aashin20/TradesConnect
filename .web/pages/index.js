/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const LottieFiles = dynamic(() => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact), { ssr: false });


                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {"Ooops...Unknown Reflex error has occured:"}
</p>
  <p css={({ ["color"] : "red" })}>
  {error.message}
</p>
  <p>
  {"Please contact the support."}
</p>
</div>
                    );
                }
            

export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
  )
}

export function Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_e521b13e556da291bcec5187a783ea81 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue((connectErrors.length > 0)) ? (
  <Fragment>
  <LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Button_daf78d61136b4c56943afe08c8413dc6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_19763068cd8251a7d5dbe8da12b27d86 = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/find/", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton color={"green"} onClick={on_click_19763068cd8251a7d5dbe8da12b27d86} size={"lg"}>
  {"Looking for a Tradesman"}
</RadixThemesButton>
  )
}

export function Button_002b6e48c2c930c0399a5f5a5fe41241 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_a0c29feac3850ce4822ba178cde719bc = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/login/", ["external"] : false, ["replace"] : false })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton color={"blue"} onClick={on_click_a0c29feac3850ce4822ba178cde719bc} size={"lg"}>
  {"I am a Tradesman"}
</RadixThemesButton>
  )
}

export default function Component() {
  const ref_features = useRef(null); refs["ref_features"] = ref_features;
  const ref_lottie_animation_reliable = useRef(null); refs["ref_lottie_animation_reliable"] = ref_lottie_animation_reliable;
  const ref_contact = useRef(null); refs["ref_contact"] = ref_contact;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_24a2e81d0c5d3cb5b5f786fdef44e514/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>
  <RadixThemesBox css={({ ["padding"] : "1rem", ["backgroundColor"] : "blue.500", ["color"] : "white" })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "50px" })} src={"/logo.png"}/>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "2rem", ["fontWeight"] : "bold" })}>
  {"TradesConnect"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesLink asChild={true} css={({ ["padding"] : "1rem", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>
  <NextLink href={"#"} passHref={true}>
  {"Home"}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={({ ["padding"] : "1rem", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>
  <NextLink href={"#features"} passHref={true}>
  {"Features"}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={({ ["padding"] : "1rem", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>
  <NextLink href={"#contact"} passHref={true}>
  {"Contact"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={({ ["padding"] : "5rem", ["textAlign"] : "center", ["backgroundColor"] : "gray.100" })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesHeading css={({ ["color"] : "blue.700" })} size={"xl"}>
  {"Connecting Local Tradesmen with Customers"}
</RadixThemesHeading>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2rem", ["color"] : "gray.700", ["width"] : "50%" })}>
  {"Find skilled tradesmen in your area for your home or business needs."}
</RadixThemesText>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <Button_002b6e48c2c930c0399a5f5a5fe41241/>
  <Button_daf78d61136b4c56943afe08c8413dc6/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={({ ["padding"] : "2rem", ["justifyContent"] : "space-evenly" })}>
  <RadixThemesHeading css={({ ["padding"] : "2rem" })} id={"features"} ref={ref_features} size={"lg"}>
  {"Why Choose TradesConnect?"}
</RadixThemesHeading>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <RadixThemesBox>
  <RadixThemesBox css={({ ["width"] : "150px", ["height"] : "150px", ["position"] : "relative" })} id={"lottie-animation-reliable"} ref={ref_lottie_animation_reliable}>
  <LottieFiles autoResizeCanvas={true} autoplay={true} loop={true} mode={"forward"} playOnHover={false} renderConfig={({  })} speed={1} src={"https://lottie.host/e1565000-ff34-4aed-809e-913fc6a93cb5/6YwiYO4TIk.json"} useFrameInterpolation={true}/>
</RadixThemesBox>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2rem", ["fontWeight"] : "bold", ["color"] : "blue.600" })}>
  {"Reliable Tradesmen"}
</RadixThemesText>
  <RadixThemesText as={"p"} css={({ ["color"] : "gray.600", ["textAlign"] : "center" })}>
  {"Verified professionals ready to assist you."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesBox css={({ ["width"] : "150px", ["height"] : "150px", ["position"] : "relative" })} id={"lottie-animation-reliable"} ref={ref_lottie_animation_reliable}>
  <LottieFiles autoResizeCanvas={true} autoplay={true} loop={true} mode={"forward"} playOnHover={false} renderConfig={({  })} speed={1} src={"https://lottie.host/2a484378-9f0e-4b63-825b-3950c7b17482/3ItfzWCOUv.json"} useFrameInterpolation={true}/>
</RadixThemesBox>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2rem", ["fontWeight"] : "bold" })}>
  {"Secure Payments"}
</RadixThemesText>
  <RadixThemesText as={"p"}>
  {"Secure online payments for hassle-free transactions."}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesBox css={({ ["width"] : "150px", ["height"] : "150px", ["position"] : "relative" })}>
  <LottieFiles autoResizeCanvas={true} autoplay={true} loop={true} mode={"forward"} playOnHover={false} renderConfig={({  })} speed={1} src={"https://lottie.host/3a3abfd9-bd0d-4d36-832f-73ba9d090bcf/KW2aXhCml0.json"} useFrameInterpolation={true}/>
</RadixThemesBox>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2rem", ["fontWeight"] : "bold" })}>
  {"24/7 Support"}
</RadixThemesText>
  <RadixThemesText as={"p"}>
  {"We are here to help at every step."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={({ ["padding"] : "3rem", ["textAlign"] : "center", ["backgroundColor"] : "gray.200" })}>
  <RadixThemesHeading css={({ ["padding"] : "2rem" })} id={"contact"} ref={ref_contact} size={"lg"}>
  {"Contact Us"}
</RadixThemesHeading>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"}>
  {"Got a question? We'd love to hear from you!"}
</RadixThemesText>
  <RadixThemesTextField.Root css={({ ["width"] : "40%" })} placeholder={"Your Name"}/>
  <RadixThemesTextField.Root css={({ ["width"] : "40%" })} placeholder={"Your Email"}/>
  <RadixThemesTextArea css={({ ["width"] : "40%" })} placeholder={"Your Message"}/>
  <RadixThemesButton color={"blue"}>
  {"Send Message"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={({ ["backgroundColor"] : "blue.500", ["color"] : "white", ["textAlign"] : "center" })}>
  <RadixThemesText as={"p"} css={({ ["padding"] : "2rem" })}>
  {"\u00a9 2024 TradesConnect. All Rights Reserved."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesContainer>
  <NextHead>
  <title>
  {"Trades | Index"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}
