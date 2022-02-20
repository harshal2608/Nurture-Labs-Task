import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { DocumentTextIcon as DocumentTextIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function documentation({ active = false }: { active: boolean }) {
  return (
    <Link href="/documentation" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <DocumentTextIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <DocumentTextIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Documentation</TYPEWHITE>
          ) : (
            <TYPEGREY>Documentation</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default documentation;
