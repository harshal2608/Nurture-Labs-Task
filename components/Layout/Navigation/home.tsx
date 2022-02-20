import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { ViewGridIcon } from "@heroicons/react/outline";
import { ViewGridIcon as ViewGridIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function home({ active = false }: { active: boolean }) {
  return (
    <Link href="/home" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <ViewGridIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <ViewGridIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? <TYPEWHITE>Home</TYPEWHITE> : <TYPEGREY>Home</TYPEGREY>}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default home;
