/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Select as RadixThemesSelect, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextHead from "next/head"



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

export function Textfield__root_3f8fe800affe1f573261f3bb3123f110 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_5105523f4406526b9454784a5076c418 = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___find____filter_form_state.set_location", ({ ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_5105523f4406526b9454784a5076c418} placeholder={"Enter your location"} size={"3"} type={"email"}/>
  )
}

export function Select__root_a80dd24a314484c38b742ccce28221a1 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_cfc94a5ceb7a3933541b114deaacb6f5 = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___find____filter_form_state.set_profession", ({ ["value"] : _e0 })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_cfc94a5ceb7a3933541b114deaacb6f5} required={true} size={"3"}>
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
  )
}

export function Container_05040e345ee9bd0ab17abf9f2515752c () {
  const reflex___state____state__trades___pages___find____filter_form_state = useContext(StateContexts.reflex___state____state__trades___pages___find____filter_form_state)



  return (
    <RadixThemesContainer css={({ ["padding"] : "16px", ["spacing"] : "5", ["align"] : "center", ["width"] : "100%" })} size={"3"}>
  <>{reflex___state____state__trades___pages___find____filter_form_state.entries.map((filter, index_22e75649e71d9f30) => (
  <RadixThemesBox css={({ ["padding"] : "1em" })} key={index_22e75649e71d9f30}>
  <RadixThemesHeading>
  {filter["name"]}
</RadixThemesHeading>
  <RadixThemesText as={"p"}>
  {filter["phone_number"]}
</RadixThemesText>
</RadixThemesBox>
))}</>
</RadixThemesContainer>
  )
}

export function Button_1aacf158b60f0a294c2e3b3b0feebac2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_5b7e82e179d745657d47863f865135b6 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.trades___pages___find____filter_form_state.Filter", ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["width"] : "100%" })} onClick={on_click_5b7e82e179d745657d47863f865135b6} size={"3"}>
  {"Filter"}
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
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesCard css={({ ["maxWidth"] : "28em", ["width"] : "100%" })} size={"4"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"6"}>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })} direction={"column"} gap={"5"}>
  <img css={({ ["width"] : "2.5em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.png"}/>
  <RadixThemesHeading as={"h2"} css={({ ["textAlign"] : "center", ["width"] : "100%" })} size={"6"}>
  {"Find Tradesmen Near You!"}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Location"}
</RadixThemesText>
  <Textfield__root_3f8fe800affe1f573261f3bb3123f110/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Profession"}
</RadixThemesText>
  <Select__root_a80dd24a314484c38b742ccce28221a1/>
</RadixThemesFlex>
  <Button_1aacf158b60f0a294c2e3b3b0feebac2/>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesFlex align={"center"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["minHeight"] : "50vh" })} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesHeading css={({ ["color"] : "gray.800", ["fontWeight"] : "bold", ["marginBottom"] : "8" })} size={"5"}>
  {"Results"}
</RadixThemesHeading>
  <Container_05040e345ee9bd0ab17abf9f2515752c/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {"Trades | Find"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}
