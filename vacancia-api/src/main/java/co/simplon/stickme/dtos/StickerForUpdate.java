package co.simplon.stickme.dtos;

import java.math.BigDecimal;

public interface StickerForUpdate {

    String getName();

    String getDescription();

    String getImageUrl();

    BigDecimal getPrice();

    Long getSizeId();

    Long getAspectId();
}
