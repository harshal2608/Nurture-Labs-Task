import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { ChatAltIcon } from "@heroicons/react/outline";
import { ChatAltIcon as ChatAltIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section2({ active = false }: { active: boolean }) {
  return (
    <Link href="/section2" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <ChatAltIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <ChatAltIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 2</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 2</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section2;
