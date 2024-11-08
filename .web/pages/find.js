/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Select as RadixThemesSelect, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Button_f8bbf45145186b0712c2f0d2ddbe4aaf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_5b7e82e179d745657d47863f865135b6 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.trades___pages___find____filter_form_state.Filter", ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton onClick={on_click_5b7e82e179d745657d47863f865135b6} type={"submit"}>
  {"Filter"}
</RadixThemesButton>
  )
}

export function Select__root_dce490f125fca4a308bb6c94f8cc6764 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_cfc94a5ceb7a3933541b114deaacb6f5 = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___find____filter_form_state.set_profession", ({ ["value"] : _e0 })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_cfc94a5ceb7a3933541b114deaacb6f5} size={"3"}>
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Root_75882b51d6522f264acb61859a252d77 () {
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
  <Textfield__root_6fa6f6ec0908e28ca83f1e4e0b171672/>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "1em" })}/>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Choose a Profession"}
</RadixThemesText>
  <Select__root_dce490f125fca4a308bb6c94f8cc6764/>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "1em" })}/>
  <Button_f8bbf45145186b0712c2f0d2ddbe4aaf/>
</RadixFormRoot>
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

export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
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
            

export function Textfield__root_6fa6f6ec0908e28ca83f1e4e0b171672 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_5105523f4406526b9454784a5076c418 = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___find____filter_form_state.set_location", ({ ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_5105523f4406526b9454784a5076c418} placeholder={"Enter your location"} size={"3"} type={"text"}/>
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
  <RadixThemesCard css={({ ["spacing"] : "10", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "1.5em", ["paddingBottom"] : "1.5em", ["align"] : "start", ["height"] : "800px", ["width"] : "20em" })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <img css={({ ["width"] : "2.5em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.png"}/>
  <RadixThemesHeading as={"h2"} css={({ ["textAlign"] : "center", ["width"] : "100%" })} size={"6"}>
  {"Find Tradesmen near you!"}
</RadixThemesHeading>
</RadixThemesFlex>
  <Root_75882b51d6522f264acb61859a252d77/>
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
