import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { DatabaseIcon } from "@heroicons/react/outline";
import { DatabaseIcon as DatabaseIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section5({ active = false }: { active: boolean }) {
  return (
    <Link href="/section5" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <DatabaseIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <DatabaseIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 5</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 5</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section5;
