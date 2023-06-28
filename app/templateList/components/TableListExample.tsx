import React, { useEffect } from 'react';
import SquareBtn from '@/components/button/SquareBtn';
import { usePathname } from 'next/navigation';
import { openModal, useModal } from '@/store/slice/modalSlice';
import { ModalTypes } from '@/components/modal/ModalState';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, setCurrentPage } from '@/store/slice/versionSlice';
import { GlobalModal } from '@/components/modal/GlobalModal';
import { RootState } from '@/store';
import { SquareBtnProps } from '@/components/button/SquareBtn';
import Image from 'next/image';
function TableListExample({}) {
	const { dispatch, isOpen, params } = useModal();
	const versions = useSelector((state: RootState) => state.version.versions);
	const currentPage = useSelector(
		(state: RootState) => state.version.currentPage,
	);
	const itemsPerPage = useSelector(
		(state: RootState) => state.version.itemsPerPage,
	);
	const totalItems = versions.length;
	const pageCount = Math.ceil(totalItems / itemsPerPage);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = versions.slice(indexOfFirstItem, indexOfLastItem);
	const pathname = usePathname();
	// const handleDelete = (itemId: number) => {
	// 	dispatch(deleteItem(itemId));
	// };
	// const handlePageChange = (pageNumber: number) => {
	// 	dispatch(setCurrentPage(pageNumber));
	// };
	return (
		<div>
			<table className="w-full ">
				<thead>
					<tr className="flex h-[81px] w-full  items-center justify-between border-[#989898]  bg-[#F9F9F9] px-[16px] ">
						<th className=" min-w-[140px] text-left">
							<input type="checkbox" className="h-[24px] w-[24px]" />
						</th>
						<th className="relative flex min-w-[150px] ">
							<div> 마지막 수정 일시 </div>
							<div className="flex items-center">
								{' '}
								<Image
									src="/img/dropdown.svg"
									width={10}
									height={8}
									className=" object-cover "
									alt="드롭업"
								/>
							</div>
						</th>
						<th className="flex w-[210px] min-w-[50px]">
							<div> 버전</div>{' '}
							<div className="flex items-center">
								{' '}
								<Image
									src="/img/dropdown_s.svg"
									width={10}
									height={8}
									className=" object-cover "
									alt="드롭업"
								/>{' '}
							</div>
						</th>
						<th className="flex w-[400px]">
							<div> 파일명 </div>{' '}
							<div className="flex items-center">
								{' '}
								<Image
									src="/img/dropdown_s.svg"
									width={10}
									height={8}
									className=" object-cover "
									alt="드롭업"
								/>{' '}
							</div>
						</th>
						<th className="w-[100px] min-w-[28px]">편집</th>
					</tr>
				</thead>
				<tbody>
					<tr className="flex h-[81px] w-full cursor-pointer items-center justify-between border-t-[1px] px-[16px]  text-[#747474] hover:bg-[#c8e5f4]">
						<td className="min-w-[140px]">
							<SquareBtn
								borderColor="#00A3FF"
								textColor="#00A3FF"
								textContent="퍼블리시중"
								bg="#DEF4FF"
								onClick={() => {}}
							/>
						</td>

						<td className="min-w-[150px]">2023.06.29.05:26</td>
						<td className="min-w-[210px]">26.0</td>
						<td className="min-w-[400px] text-left">
							2023 프리미엄 요금제 최종본
						</td>

						<td className="flex w-[100px] min-w-[28px] items-center justify-center">
							<SquareBtn
								textColor="#747474"
								width="88px"
								textContent="편집"
								bg="white"
								borderColor="#747474"
							/>
						</td>
					</tr>
					{currentItems.map((version) => (
						<tr
							key={version.id}
							className="flex h-[81px]  w-full cursor-pointer items-center justify-between border-t-[1px] px-[16px] text-[#747474] hover:bg-[#c8e5f4]"
						>
							<td className="min-w-[140px] ">
								<input type="checkbox" className="h-[24px] w-[24px]" />
							</td>
							<td className="min-w-[150px]">{version.updated_at}</td>
							<td className="min-w-[210px]">{version.version}.0</td>
							<td className="min-w-[400px] text-left">{version.title}</td>
							<td className="flex w-[100px] min-w-[28px] items-center justify-center">
								<SquareBtn
									textColor="#747474"
									width="88px"
									textContent="편집"
									bg="white"
									borderColor="#747474"
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TableListExample;
