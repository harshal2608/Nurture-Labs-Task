import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { ShareIcon } from "@heroicons/react/outline";
import { ShareIcon as ShareIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section8({ active = false }: { active: boolean }) {
  return (
    <Link href="/" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <ShareIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <ShareIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 8</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 8</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section8;
