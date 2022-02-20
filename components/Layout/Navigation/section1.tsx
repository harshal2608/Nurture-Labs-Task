import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { ChartSquareBarIcon } from "@heroicons/react/outline";
import { ChartSquareBarIcon as ChartSquareBarIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section1({ active = false }: { active: boolean }) {
  return (
    <Link href="/section1" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <ChartSquareBarIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <ChartSquareBarIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 1</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 1</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section1;
