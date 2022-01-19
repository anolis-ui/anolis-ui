// import { x } from "@xstyled/emotion";
// import { DropMenuButton } from "components/DropMenu/DropdownMenuButton";
// import { DropMenuItem } from "components/DropMenu/DropdownMenuItem";
// import { DropMenuList } from "components/DropMenu/DropdownMenuList";
// import { sketch, SketchLayout } from "sketch";

// import { DropMenu } from ".";

// const Normal = sketch(() => {
//   return (
//     <SketchLayout title="Card">
//       <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
//         <DropMenu>
//           {({ isExpanded }: { isExpanded: boolean }) => (
//             <>
//               <DropMenuButton w="15rem">
//                 {isExpanded ? "custom expanded" : "right closed"}
//               </DropMenuButton>

//               <DropMenuList>
//                 <DropMenuItem onSelect={() => console.info("aa")}>
//                   aaa
//                 </DropMenuItem>
//               </DropMenuList>
//             </>
//           )}
//         </DropMenu>

//         <DropMenu>
//           {({ isExpanded }: { isExpanded: boolean }) => (
//             <>
//               <DropMenuButton customButton={<div>{isExpanded ? "custom expanded" : "left closed"}</div>} />

//               <DropMenuList position="right">
//                 <DropMenuItem onSelect={() => console.info("selected")}>
//                   aaa
//                 </DropMenuItem>
//               </DropMenuList>
//             </>
//           )}
//         </DropMenu>

//         <DropMenu>
//           {({ isExpanded }: { isExpanded: boolean }) => (
//             <>
//               <DropMenuButton customButton={<div>{isExpanded ? "custom expanded" : "exact width closed"}</div>} />

//               <DropMenuList position="exactWidth">
//                 <DropMenuItem onSelect={() => console.info("selected")}>
//                   aaa
//                 </DropMenuItem>
//               </DropMenuList>
//             </>
//           )}
//         </DropMenu>
//       </x.div>
//     </SketchLayout>
//   );
// });

// export default Normal;
