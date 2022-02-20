import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { CollectionIcon } from "@heroicons/react/outline";
import { CollectionIcon as CollectionIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section3({ active = false }: { active: boolean }) {
  return (
    <Link href="/section3" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <CollectionIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <CollectionIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 3</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 3</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section3;
