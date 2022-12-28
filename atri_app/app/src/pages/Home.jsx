import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv1Cb, useHeaderCb, useDiv2Cb, useDiv3Cb, useNavLinkCb, usebook-btnCb, useImage1Cb, useNavEl-1Cb, useNavEl-2Cb, useNavEl-3Cb, useNavEl-4Cb, useNavEl-5Cb, useImage2Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const NavLinkProps = useStore((state)=>state["Home"]["NavLink"]);
const NavLinkIoProps = useIoStore((state)=>state["Home"]["NavLink"]);
const NavLinkCb = useNavLinkCb()
const book-btnProps = useStore((state)=>state["Home"]["book-btn"]);
const book-btnIoProps = useIoStore((state)=>state["Home"]["book-btn"]);
const book-btnCb = usebook-btnCb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const NavEl-1Props = useStore((state)=>state["Home"]["NavEl-1"]);
const NavEl-1IoProps = useIoStore((state)=>state["Home"]["NavEl-1"]);
const NavEl-1Cb = useNavEl-1Cb()
const NavEl-2Props = useStore((state)=>state["Home"]["NavEl-2"]);
const NavEl-2IoProps = useIoStore((state)=>state["Home"]["NavEl-2"]);
const NavEl-2Cb = useNavEl-2Cb()
const NavEl-3Props = useStore((state)=>state["Home"]["NavEl-3"]);
const NavEl-3IoProps = useIoStore((state)=>state["Home"]["NavEl-3"]);
const NavEl-3Cb = useNavEl-3Cb()
const NavEl-4Props = useStore((state)=>state["Home"]["NavEl-4"]);
const NavEl-4IoProps = useIoStore((state)=>state["Home"]["NavEl-4"]);
const NavEl-4Cb = useNavEl-4Cb()
const NavEl-5Props = useStore((state)=>state["Home"]["NavEl-5"]);
const NavEl-5IoProps = useIoStore((state)=>state["Home"]["NavEl-5"]);
const NavEl-5Cb = useNavEl-5Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()

  return (<>
  <Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Flex className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Div className="p-Home Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Div>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Flex className="p-Home NavLink bpt" {...NavLinkProps} {...NavLinkCb} {...NavLinkIoProps}>
<TextBox className="p-Home NavEl-1 bpt" {...NavEl-1Props} {...NavEl-1Cb} {...NavEl-1IoProps}/>
<TextBox className="p-Home NavEl-2 bpt" {...NavEl-2Props} {...NavEl-2Cb} {...NavEl-2IoProps}/>
<TextBox className="p-Home NavEl-3 bpt" {...NavEl-3Props} {...NavEl-3Cb} {...NavEl-3IoProps}/>
<TextBox className="p-Home NavEl-4 bpt" {...NavEl-4Props} {...NavEl-4Cb} {...NavEl-4IoProps}/>
<Flex className="p-Home book-btn bpt" {...book-btnProps} {...book-btnCb} {...book-btnIoProps}>
<TextBox className="p-Home NavEl-5 bpt" {...NavEl-5Props} {...NavEl-5Cb} {...NavEl-5IoProps}/>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
  </>);
}
