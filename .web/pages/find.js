/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Card as RadixThemesCard, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Select as RadixThemesSelect, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



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

export function Root_90f2a4c388b4a826799f42b8ee53f76f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_a5d63776fcafd86dc6ccad2d5236a185 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => ((addEvents([], args, ({ ["preventDefault"] : true })))))());

        if (false) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_a5d63776fcafd86dc6ccad2d5236a185}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Enter your Location"}
</RadixThemesText>
  <RadixThemesTextField.Root css={({ ["width"] : "100%" })} placeholder={"Enter your location"} size={"3"} type={"text"}/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Choose a Profession"}
</RadixThemesText>
  <RadixThemesSelect.Root size={"3"}>
  <RadixThemesSelect.Trigger css={({ ["width"] : "100%" })}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {""}
  <RadixThemesSelect.Item value={"Plumber"}>
  {"Plumber"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"Electrician"}>
  {"Electrician"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"Carpenter"}>
  {"Carpenter"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"Painter"}>
  {"Painter"}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={"Mechanic"}>
  {"Mechanic"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesFlex>
</RadixFormRoot>
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


export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
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
  <RadixThemesCard css={({ ["spacing"] : "5", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "1.5em", ["paddingBottom"] : "1.5em", ["align"] : "start", ["height"] : "800px", ["width"] : "20em" })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "2.5em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.png"}/>
  <RadixThemesHeading as={"h2"} css={({ ["textAlign"] : "center", ["width"] : "100%" })} size={"6"}>
  {"Find Tradesmen near you!"}
</RadixThemesHeading>
</RadixThemesFlex>
  <Root_90f2a4c388b4a826799f42b8ee53f76f/>
</RadixThemesFlex>
</RadixThemesCard>
  <NextHead>
  <title>
  {"Trades | Find"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}
