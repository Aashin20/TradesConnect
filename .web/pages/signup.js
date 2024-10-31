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



export function Div_24a2e81d0c5d3cb5b5f786fdef44e514 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_e521b13e556da291bcec5187a783ea81/>
</div>
  )
}

export function Textfield__root_b4ca1fc79587770a592149c148ee9bb7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_3ac373d4639ce7f2e4f7100821f5e8bf = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___signup____signup_form_state.update_form", ({ ["field"] : "location", ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_3ac373d4639ce7f2e4f7100821f5e8bf} placeholder={"Location"} required={true} size={"3"}/>
  )
}

export function Root_43a8a50bcccb2c6837613f02cf93128c () {
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
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%", ["size"] : "4", ["maxWidth"] : "28em", ["spacing"] : 4, ["padding"] : 5, ["align"] : "center", ["justify"] : "center" })} onSubmit={handleSubmit_a5d63776fcafd86dc6ccad2d5236a185}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Name"}
</RadixThemesText>
  <Textfield__root_e120494c72ca81918defc9f23fbb28ae/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Email"}
</RadixThemesText>
  <Textfield__root_7c44c63eba93982b572efea97c2ce3d8/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>
  <RadixThemesText as={"p"} size={"3"} weight={"medium"}>
  {"Password"}
</RadixThemesText>
</RadixThemesFlex>
  <Textfield__root_48fa06bd8f684fc43b85fb303c053258/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Profession"}
</RadixThemesText>
  <Select__root_7703bebb3bd38ef0a68181a6ab94bff5/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Phone Number"}
</RadixThemesText>
  <Textfield__root_4113a259f169dee2b03bb28860c03eb2/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"3"} weight={"medium"}>
  {"Location"}
</RadixThemesText>
  <Textfield__root_b4ca1fc79587770a592149c148ee9bb7/>
</RadixThemesFlex>
  <Button_382df5e42ec6ff6ad357aca35b36a437/>
</RadixThemesFlex>
</RadixFormRoot>
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


export function Button_382df5e42ec6ff6ad357aca35b36a437 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_8ac8bab1048e2c2108aa79e3f7244bfd = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.trades___pages___signup____signup_form_state.handle", ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton onClick={on_click_8ac8bab1048e2c2108aa79e3f7244bfd} size={"3"}>
  {"Sign Up"}
</RadixThemesButton>
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
            

export function Textfield__root_7c44c63eba93982b572efea97c2ce3d8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_e8f7fd7b840fd680c29a36b6654ac40e = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___signup____signup_form_state.update_form", ({ ["field"] : "email", ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_e8f7fd7b840fd680c29a36b6654ac40e} placeholder={"Enter your Email"} required={true} size={"3"} type={"email"}/>
  )
}

export function Textfield__root_48fa06bd8f684fc43b85fb303c053258 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_7f83a8ab86f7313e3fc02973cd7f1e62 = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___signup____signup_form_state.update_form", ({ ["field"] : "password", ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_7f83a8ab86f7313e3fc02973cd7f1e62} placeholder={"Password"} required={true} size={"3"} type={"password"}/>
  )
}

export function Select__root_7703bebb3bd38ef0a68181a6ab94bff5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_f235631302de2b9d5922a10fe5ccd5fc = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___signup____signup_form_state.update_form", ({ ["field"] : "profession", ["value"] : _e0 })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesSelect.Root onValueChange={on_change_f235631302de2b9d5922a10fe5ccd5fc} required={true} size={"3"}>
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

export function Textfield__root_e120494c72ca81918defc9f23fbb28ae () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_1fc85d5983c1cb86b761cef045f9e6bc = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___signup____signup_form_state.update_form", ({ ["field"] : "name", ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_1fc85d5983c1cb86b761cef045f9e6bc} placeholder={"Enter your Name"} required={true} size={"3"}/>
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

export function Textfield__root_4113a259f169dee2b03bb28860c03eb2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_24f079985eb3e3f0d3489f0c8d9534ec = useCallback(((_e0) => ((addEvents([(Event("reflex___state____state.trades___pages___signup____signup_form_state.update_form", ({ ["field"] : "phone_number", ["value"] : _e0["target"]["value"] })))], [_e0], ({  }))))), [addEvents, Event])


  return (
    <RadixThemesTextField.Root css={({ ["width"] : "100%" })} onChange={on_change_24f079985eb3e3f0d3489f0c8d9534ec} placeholder={"Enter your Phone Number"} required={true} size={"3"} type={"number"}/>
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
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })} direction={"column"} gap={"5"}>
  <img css={({ ["width"] : "2.5em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.png"}/>
  <RadixThemesHeading as={"h2"} css={({ ["textAlign"] : "center", ["width"] : "100%" })} size={"6"}>
  {"Sign up to TradesConnect"}
</RadixThemesHeading>
</RadixThemesFlex>
  <Root_43a8a50bcccb2c6837613f02cf93128c/>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
  <NextHead>
  <title>
  {"Trades | Signup"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}
