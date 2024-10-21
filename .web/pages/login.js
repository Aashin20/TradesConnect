/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export function Textfield__root_244b5e78ee3062b5a8c883afe057b153 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_3b47a16ef92465b86b75e4f0044055a8 = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___login____login_state.set_email", ({ ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_3b47a16ef92465b86b75e4f0044055a8} placeholder={"Enter your email"} size={"3"} type={"email"}/>
  )
}

export function Textfield__root_7a4c9436ed144cd98b023b70c8df66f2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_9efe60e1534e1d9347bbd02286df2659 = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___login____login_state.set_password", ({ ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_9efe60e1534e1d9347bbd02286df2659} placeholder={"Enter your password"} size={"3"} type={"password"}/>
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

export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
  )
}

export function Button_622076c389b07b94db158feef8cbb3c6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_d73a1f825273ffd2cfa8a0f3fcec0b69 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.trades___pages___login____login_state.validate_login", ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["width"] : "100%" })} onClick={on_click_d73a1f825273ffd2cfa8a0f3fcec0b69} size={"3"}>
  {"Sign in"}
</RadixThemesButton>
  )
}

export default function Component() {
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
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>
  <RadixThemesCard css={({ ["maxWidth"] : "28em", ["width"] : "100%" })} size={"4"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"6"}>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })} direction={"column"} gap={"5"}>
  <img css={({ ["width"] : "2.5em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.png"}/>
  <RadixThemesHeading as={"h2"} css={({ ["textAlign"] : "center", ["width"] : "100%" })} size={"6"}>
  {"Sign in to your account"}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Email address"}
</RadixThemesText>
  <Textfield__root_244b5e78ee3062b5a8c883afe057b153/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"2"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesText as={"p"} size={"3"} weight={"medium"}>
  {"Password"}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>
  <NextLink href={"#"} passHref={true}>
  {"Forgot password?"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <Textfield__root_7a4c9436ed144cd98b023b70c8df66f2/>
</RadixThemesFlex>
  <Button_622076c389b07b94db158feef8cbb3c6/>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["opacity"] : "0.8" })} direction={"row"} gap={"2"}>
  <RadixThemesText as={"p"} size={"3"}>
  {"New here?"}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>
  <NextLink href={"/signup/"} passHref={true}>
  {"Sign up"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
  <NextHead>
  <title>
  {"Trades | Login"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}
