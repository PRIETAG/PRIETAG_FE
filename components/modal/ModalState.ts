import { ModalState } from '@/store/slice/modalSlice';

type ModalType = {
	TemplateDelModal: ModalState;
	PositionSelectModal: ModalState;
	ColorChangeModal: ModalState;
	ConfirmPublishModal: ModalState;
	PriceContainerDelModal: ModalState;
	PriceSectionDelModal: ModalState;
	DetailedFunctionContainerDelModal: ModalState;
	DetailedFunctionSectionDelModal: ModalState;
	FAQResetModal: ModalState;
	FAQSectionDelModal: ModalState;
};

const blue = `bg-[#00A3FF]`;
const red = `bg-[#FF0000]`;

export const ModalTypes: ModalType = {
	TemplateDelModal: {
		isOpen: true,
		params: {
			title: '템플릿 삭제',
			description:
				'템플릿을 정말로 삭제하시겠습니까? \n삭제시 복구할 수 없습니다.',
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '삭제',
					color: red,
				},
			},
		},
	},
	PositionSelectModal: {
		isOpen: true,
		params: {
			title: '위치 선택',
			description:
				'해당 요소가 추가될 위치를 먼저 선택해주세요. \n선택한 요소 아레에 추가됩니다.',
			buttons: {
				behaveButton: {
					text: '확인',
					color: blue,
				},
			},
		},
	},
	ColorChangeModal: {
		isOpen: true,
		params: {
			title: '컬러 테마 변경',
			description:
				"해당 메뉴에서는 컬러 선택, 테마 변경이 불가능합니다.\n컬러 테마를 변경하시려면 오른쪽 상단의 '메뉴 - 컬러 테마 재설정'에서 해주시기  바랍니다",
			buttons: {
				behaveButton: {
					text: '확인',
					color: blue,
				},
			},
		},
	},
	ConfirmPublishModal: {
		isOpen: true,
		params: {
			title: '퍼블리시 확인',
			description: `저번에 만들었던 요금제 템플릿으로 퍼블리시하시겠습니까? \n기존 사용 중인 템플릿은 자동 취소됩니다.`,
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '퍼블리시',
					color: red,
				},
			},
		},
	},
	PriceContainerDelModal: {
		isOpen: true,
		params: {
			title: '가격 카드 컨테이너 삭제 및 초기화',
			description:
				'가격 카드 컨테이너의 모든 내용이 삭제됩니다. \n삭제된 내용은 복구할 수 없고, 삭제 후 새로운 카드 컨테이너가 생성됩니다. \n진행하시겠습니까?',
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '삭제 후 재생성',
					color: red,
				},
			},
		},
	},
	PriceSectionDelModal: {
		isOpen: true,
		params: {
			title: '가격 카드 섹션 삭제 및 초기화',
			description:
				'가격 카드 섹션의 모든 내용이 삭제됩니다. 삭제된 내용은 복구할 수 없고, 삭제 후 새로운 카드 섹션이 생성됩니다. 진행하시겠습니까?',
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '삭제 후 재생성',
					color: red,
				},
			},
		},
	},
	DetailedFunctionContainerDelModal: {
		isOpen: true,
		params: {
			title: '상세 기능표 컨테이너 삭제 및 초기화',
			description:
				'상세 기능표 컨테이너의 모든 내용이 삭제됩니다. 삭제된 내용은 복구할 수 없고, 삭제 후 새로운 카드 섹션이 생성됩니다. 진행하시겠습니까?',
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '삭제 후 재생성',
					color: red,
				},
			},
		},
	},
	DetailedFunctionSectionDelModal: {
		isOpen: true,
		params: {
			title: '상세 기능표 섹션 삭제 및 초기화',
			description:
				'상세 기능표 섹션의 모든 내용이 삭제됩니다. 삭제된 내용은 복구할 수 없고, 삭제 후 새로운 상세 기능표 섹션이 생성됩니다. 진행하시겠습니까?',
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '삭제 후 재생성',
					color: red,
				},
			},
		},
	},
	FAQResetModal: {
		isOpen: true,
		params: {
			title: '내용 초기화',
			description:
				'초기화되어 모든 내용이 삭제됩니다. 삭제된 내용은 복구할 수 없습니다. 진행하시겠습니까?',
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '삭제',
					color: red,
				},
			},
		},
	},
	FAQSectionDelModal: {
		isOpen: true,
		params: {
			title: 'FAQ 섹션 삭제',
			description:
				'FAQ 섹션과 작성된 모든 내용이 삭제됩니다. 삭제된 내용은 복구할 수 없습니다. 진행하시겠습니까?',
			buttons: {
				cancelButton: {
					text: '취소',
				},
				behaveButton: {
					text: '삭제',
					color: red,
				},
			},
		},
	},
};
