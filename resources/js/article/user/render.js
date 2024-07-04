export function renderTable(data, isAuth) {
    const $table = $("#table");
    $table.hide();
    $table.empty();
    const addToUserDictionaryColumn = isAuth
        ? '<td><button class="btn add-button"><i class="bi bi-bookmark-plus"></i></button></td>'
        : "";
    for (const row of data["data"]) {
        const { number, id, word, translation } = row;
        const tableRow = `
        <tr>
            <th scope="row">${number}<input hidden name="id" value="${id}"></th>
            <td><input name="word" value="${word}" class="text ru-text table-text" minlength="1" maxlength="20" data-lang="ru"></td>
            <td><input name="translation" value="${translation}" class="text en-text table-text" minlength="2" maxlength="20" data-lang="en"></td>
            ${addToUserDictionaryColumn}
        </tr>`;
        $table.append(tableRow);
    }
    $table.fadeIn(300);
}

export function renderPagination(data) {
    const $pagination = $("#pagination");
    $pagination.empty();

    for (const link of data["links"]) {
        const { url, label, active } = link;
        const activeLink = active ? "active" : "";
        const disabledLink = url === null ? "disabled" : "";
        const linkItem = `<li class="page-item unselectable ${activeLink} ${disabledLink}"><a class="page-link" data-href="${url}" >${label}</a></li>`;
        $pagination.append(linkItem);
    }
}
